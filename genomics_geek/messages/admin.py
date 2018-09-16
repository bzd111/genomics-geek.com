# -*- coding: utf-8
from django.contrib import admin

from . import models


@admin.register(models.Message)
class MessageAdmin(admin.ModelAdmin):
    model = models.Message
    list_display = ('email', 'subject', 'read', 'created', 'modified')
    search_fields = ('email', 'subject', 'text')
    list_filter = ('read', )
    save_as = True
