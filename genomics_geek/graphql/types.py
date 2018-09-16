from graphene import Node
from graphene_django import DjangoObjectType

from ..messages.models import Message
from .mixins import LoginRequiredMixin, PrimaryKeyMixin


class MessageNode(LoginRequiredMixin, PrimaryKeyMixin, DjangoObjectType):

    class Meta:
        model = Message
        interfaces = (Node, )
