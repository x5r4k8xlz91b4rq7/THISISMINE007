"use client"

import React from 'react';
import { X, Eye, GripVertical } from 'lucide-react';

interface FileWithId {
  id: string;
  file: File;
  preview?: string;
}

interface FilePreviewProps {
  file: FileWithId;
  onRemove: () => void;
  allFiles: FileWithId[];
  index: number;
  onReorder: (fromIndex: number, toIndex: number) => void;
  activeFileId: string | null;
  onSetActiveFile: (id: string) => void;
  isPreviewOpen: boolean;
  onOpenPreview: (id: string) => void;
  onClosePreview: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  onRemove,
  onOpenPreview
}) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-blue-950/50 rounded-md border border-blue-800/50">
      <div className="flex items-center gap-2 flex-1">
        {file.file.type.startsWith('image/') && file.preview && (
          <img
            src={file.preview}
            alt={file.file.name}
            className="w-10 h-10 object-cover rounded cursor-pointer"
            onClick={() => onOpenPreview(file.id)}
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-foreground text-sm truncate">{file.file.name}</p>
          <p className="text-muted-foreground text-xs">
            {(file.file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {file.file.type.startsWith('image/') && (
          <button
            type="button"
            onClick={() => onOpenPreview(file.id)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="Preview"
          >
            <Eye className="h-4 w-4" />
          </button>
        )}
        <button
          type="button"
          onClick={onRemove}
          className="text-muted-foreground hover:text-red-400 transition-colors"
          title="Remove"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FilePreview;