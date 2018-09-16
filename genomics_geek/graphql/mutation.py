from django.conf import settings
from django.core.mail import send_mail

from graphene import Field, Mutation, ObjectType, String
from graphene_django.debug import DjangoDebug

from .types import MessageNode
from ..messages.models import Message


class CreateMessage(Mutation):

    class Arguments:
        name = String(required=True)
        email = String(required=True)
        subject = String(required=True)
        text = String(required=True)

    message = Field(MessageNode)

    def mutate(self, info, **kwargs):
        instance = Message.objects.create(**kwargs)
        send_mail(
            subject=kwargs['subject'],
            message=kwargs['text'],
            from_email=kwargs['email'],
            recipient_list=settings.ADMIN_EMAILS,
            fail_silently=True,
        )
        return CreateMessage(message=instance)


class Mutation(ObjectType):
    create_message = CreateMessage.Field()
    debug = Field(DjangoDebug, name='__debug')
