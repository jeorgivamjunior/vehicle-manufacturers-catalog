export interface ManufacturerResponse {
  Country: string;
  Mfr_ID: number;
  Mfr_CommonName: string;
}

export interface useManufacturerRequestProps {
  data: ManufacturerResponse[];
  count: number;
  loading: boolean;
  handlePageChange: (_: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}
