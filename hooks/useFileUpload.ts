"use client"

import { useState, useCallback } from 'react';

interface FileWithId {
  id: string;
  file: File;
  preview?: string;
}

interface FileMetadata {
  user_name: string;
  user_email: string;
  subject: string;
  submission_type: string;
  submission_date: string;
}

interface UseFileUploadProps {
  bucket: string;
  folder: string;
  autoUpload?: boolean;
  metadata?: FileMetadata;
}

export const useFileUpload = ({ bucket, folder, autoUpload = false, metadata }: UseFileUploadProps) => {
  const [selectedFiles, setSelectedFiles] = useState<FileWithId[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const addFiles = useCallback((files: File[]) => {
    const newFiles = files.map(file => {
      const id = Math.random().toString(36).substr(2, 9);
      const fileWithId: FileWithId = { id, file };
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedFiles(prev => 
            prev.map(f => 
              f.id === id ? { ...f, preview: e.target?.result as string } : f
            )
          );
        };
        reader.readAsDataURL(file);
      }
      
      return fileWithId;
    });
    
    setSelectedFiles(prev => [...prev, ...newFiles]);
    
    if (autoUpload) {
      uploadFiles(newFiles, metadata);
    }
  }, [autoUpload, metadata]);

  const removeFile = useCallback((id: string) => {
    setSelectedFiles(prev => prev.filter(f => f.id !== id));
    if (activeFileId === id) {
      setActiveFileId(null);
      setIsPreviewOpen(false);
    }
  }, [activeFileId]);

  const reorderFiles = useCallback((fromIndex: number, toIndex: number) => {
    setSelectedFiles(prev => {
      const newFiles = [...prev];
      const [removed] = newFiles.splice(fromIndex, 1);
      newFiles.splice(toIndex, 0, removed);
      return newFiles;
    });
  }, []);

  const setActiveFile = useCallback((id: string) => {
    setActiveFileId(id);
  }, []);

  const openPreview = useCallback((id: string) => {
    setActiveFileId(id);
    setIsPreviewOpen(true);
  }, []);

  const closePreview = useCallback(() => {
    setIsPreviewOpen(false);
  }, []);

  const uploadFiles = useCallback(async (files: FileWithId[], meta?: FileMetadata) => {
    setIsUploading(true);
    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock uploaded URLs
      const urls = files.map(f => `https://example.com/uploads/${f.file.name}`);
      setUploadedUrls(prev => [...prev, ...urls]);
      
      return urls;
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  }, []);

  const getUploadedUrls = useCallback(() => {
    return uploadedUrls;
  }, [uploadedUrls]);

  const clearFiles = useCallback(() => {
    setSelectedFiles([]);
    setActiveFileId(null);
    setIsPreviewOpen(false);
    setUploadedUrls([]);
  }, []);

  return {
    selectedFiles,
    activeFileId,
    isPreviewOpen,
    addFiles,
    removeFile,
    reorderFiles,
    setActiveFile,
    openPreview,
    closePreview,
    uploadFiles,
    getUploadedUrls,
    isUploading,
    clearFiles
  };
};