from rest_framework import viewsets, filters, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing tasks with filtering, searching, and ordering.
    """
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'due_date', 'priority', 'status']
    ordering = ['-created_at']
    
    def get_queryset(self):
        # فقط تسک‌های کاربر فعلی رو برمی‌گردونه
        queryset = Task.objects.filter(user=self.request.user)
        
        # فیلتر بر اساس plan_type
        plan_type = self.request.query_params.get('plan_type', None)
        if plan_type:
            queryset = queryset.filter(plan_type=plan_type)
        
        # فیلتر بر اساس status
        status_param = self.request.query_params.get('status', None)
        if status_param:
            queryset = queryset.filter(status=status_param)
        
        # فیلتر بر اساس priority
        priority = self.request.query_params.get('priority', None)
        if priority:
            queryset = queryset.filter(priority=priority)
        
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=True, methods=['patch'])
    def toggle_status(self, request, pk=None):
        """Toggle task status between pending and completed"""
        task = self.get_object()
        task.status = 'completed' if task.status == 'pending' else 'pending'
        task.save()
        return Response({'status': task.status})
    
    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get task statistics for the current user"""
        queryset = self.get_queryset()
        stats = {
            'total': queryset.count(),
            'completed': queryset.filter(status='completed').count(),
            'pending': queryset.filter(status='pending').count(),
            'high_priority': queryset.filter(priority='high', status='pending').count(),
            'daily': queryset.filter(plan_type='daily').count(),
            'weekly': queryset.filter(plan_type='weekly').count(),
            'monthly': queryset.filter(plan_type='monthly').count(),
            'yearly': queryset.filter(plan_type='yearly').count(),
        }
        return Response(stats)