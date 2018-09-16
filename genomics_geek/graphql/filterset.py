import itertools

from django.db.models import CharField, Q

from django_filters import BaseInFilter, CharFilter, Filter, FilterSet
from django_filters.filterset import FILTER_FOR_DBFIELD_DEFAULTS
from graphene_django.filter.filterset import GRAPHENE_FILTER_SET_OVERRIDES
from graphql_relay import from_global_id


FILTER_OVERRIDES = {
    CharField: {
        'filter_class': CharFilter,
        'extra': lambda f: {'lookup_expr': 'iexact'}
    },
}


class GlobalIDFilter(Filter):

    def filter(self, qs, value):
        gid = from_global_id(value)[1]
        return super(GlobalIDFilter, self).filter(qs, gid)


class GlobalIDInFilter(BaseInFilter):

    def filter(self, qs, value):
        gids = [from_global_id(v)[1] for v in value]
        return super(GlobalIDInFilter, self).filter(qs, gids)


class SearchFilter(Filter):

    def __init__(self, search_fields, **kwargs):
        super(SearchFilter, self).__init__(**kwargs)
        self.search_fields = search_fields

    def filter(self, qs, value):
        filter = Q()
        for search_field in self.search_fields:
            filter |= Q(**{'{0}__icontains'.format(search_field): value})
        return qs.filter(filter).distinct()


class BaseFilterSet(FilterSet):
    FILTER_DEFAULTS = dict(itertools.chain(
        FILTER_FOR_DBFIELD_DEFAULTS.items(),
        FILTER_OVERRIDES.items(),
        GRAPHENE_FILTER_SET_OVERRIDES.items(),
    ))

    id__in = GlobalIDInFilter(field_name='pk', distinct=True)
    pk__in = BaseInFilter(field_name='pk', distinct=True)
    sort_by = CharFilter(field_name='filter_sort_by')

    def filter_sort_by(self, queryset, name, value):
        return queryset.order_by(*value.strip().split(','))
