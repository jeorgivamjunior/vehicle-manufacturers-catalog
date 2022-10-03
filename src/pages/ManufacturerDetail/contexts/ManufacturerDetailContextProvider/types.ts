import { ManufacturerProps } from '../../../../types';
import { Maker, Model } from '../../types';

export interface ManufacturerDetailContextProviderProps {
  handleManufacturerChange: (manufacturer: ManufacturerProps) => void;
  manufacturer?: ManufacturerProps;
  makers: Maker[];
  makersLoading: boolean;
  handleMakerChange: (makerId: number) => void;
  models: Model[];
  modelsLoading: boolean;
}
