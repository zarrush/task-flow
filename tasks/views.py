from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer

    def get_queryset(self):
        # فقط تسک‌های کاربر لاگین شده رو برگردون
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # موقع ساخت تسک، user رو خودکار ست کن
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['patch'])
    def complete(self, request, pk=None):
        """تسک رو کامل کن"""
        task = self.get_object()
        task.is_completed = True
        task.completed_at = timezone.now()
        task.save()
        return Response({'status': 'task completed'})

    @action(detail=True, methods=['patch'])
    def archive(self, request, pk=None):
        """تسک رو آرشیو کن"""
        task = self.get_object()
        task.is_archived = True
        task.save()
        return Response({'status': 'task archived'})