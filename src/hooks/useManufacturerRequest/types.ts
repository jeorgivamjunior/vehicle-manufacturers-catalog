import { ManufacturerProps } from '../../types';

export interface useManufacturerRequestProps {
  data: ManufacturerProps[];
  count: number;
  loading: boolean;
  handlePageChange: (_: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}
