export interface IAppRedux {
  isLoading: boolean;
  isTableLoading: boolean;
  uploadProgress: number;
  errorModal: {
    isOpen: boolean;
    message: string;
  };
  version?: string;
  isVersionChecked: boolean;
  isReloaded: boolean;
  isTouched: boolean;
  nextPath: string;
  isModalOpen: boolean;
  isRefresh: boolean;
}
