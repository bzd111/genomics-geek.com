from graphene import Field, Node, ObjectType
from graphene_django.debug import DjangoDebug

from . import fields, filters, types


class MessageQuery(object):

    message = Node.Field(types.MessageNode)
    all_messages = fields.ProtectedConnectionField(
        types.MessageNode,
        filterset_class=filters.MessageFilter,
    )


class Query(MessageQuery, ObjectType):
    debug = Field(DjangoDebug, name='__debug')
