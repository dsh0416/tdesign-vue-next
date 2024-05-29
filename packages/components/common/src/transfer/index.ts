import { withInstall } from '@td/adapter-vue';
import type { TdTransferProps } from '@td/intel/transfer/type';
import _Transfer from './transfer';

import './style';

export type TransferProps = TdTransferProps;

export const Transfer = withInstall(_Transfer);

export default Transfer;