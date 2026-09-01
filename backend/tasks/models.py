# backend/tasks/models.py
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]
    
    PLAN_TYPE_CHOICES = [
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
        ('yearly', 'Yearly'),
    ]
    
    # اطلاعات اصلی
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    
    # ارتباط با کاربر
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    
    # زمان‌بندی
    due_date = models.DateTimeField(null=True, blank=True)
    plan_type = models.CharField(max_length=10, choices=PLAN_TYPE_CHOICES, default='daily')
    
    # وضعیت
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    
    # timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'status']),
            models.Index(fields=['user', 'plan_type']),
        ]
    
    def __str__(self):
        return self.title