import { ManufacturerProps } from '../../../../types';
import { Maker, Model } from '../../types';

export interface ManufacturerDetailContextProviderProps {
  handleManufacturerChange: (manufacturer: ManufacturerProps) => void;
  manufacturer?: ManufacturerProps;
  makers: Maker[];
  handleMakerChange: (makerId: number) => void;
  models: Model[];
}
