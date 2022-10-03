export interface ManufacturerResponse {
  Country: string;
  Mfr_ID: number;
  Mfr_CommonName: string;
}

export interface useManufacturerRequestProps {
  data: ManufacturerResponse[];
  loading: boolean;
}
