from ..messages.models import Message
from .filterset import BaseFilterSet


class MessageFilter(BaseFilterSet):

    class Meta:
        model = Message
        fields = '__all__'
