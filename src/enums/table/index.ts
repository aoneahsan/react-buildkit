import { checkForDuplicateEnumValues } from '@utils/helpers/common';

export enum TableIdsEnum {
  // Generic
  id = 'tableIdCol',
  title = 'tableTitleCol',
  description = 'tableDescriptionCol',
  image = 'tableImageCol',
  status = 'tableStatusCol',
  amount = 'tableAmountCol',
  actions = 'tableActionsCol',
  createdAt = 'tableCreatedAtCol',
  transferMethod = 'tableTransferMethodCol',
  receptScreenshot = 'tableReceptScreenshotCol',

  // User
  name = 'tableNameCol',
  email = 'tableEmailCol',
  phoneNumber = 'tablePhoneNumberCol',
  city = 'tableCityCol',
  role = 'tableRoleCol',
  country = 'tableCountryCol',
  referralCode = 'tableReferralCodeCol',
  withdrawOptions = 'tableWithdrawOptionsCol',
  isBlocked = 'tableIsBlockedCol',

  // Games & Game room
  maxPlayersAllowed = 'tableMaxPlayersAllowedCol',
  minPlayersToStartGame = 'tableMinPlayersToStartGameCol',
  feePerPlayer = 'tableFeePerPlayerCol',
  serviceCharges = 'tableServiceChargesCol',
  engagerServiceCharges = 'tableEngagerServiceChargesCol',
  roomCode = 'tableRoomCodeCol',
  gameTitle = 'tableGameTitleCol',
  private = 'tablePrivateCol',
  visibility = 'tableVisibilityCol',
  playersCount = 'tablePlayersCountCol',
  willStartAt = 'tableWillStartAtCol',
  capacity = 'capacity',
  poolValue = 'poolValue',

  // Notification
  sendTo = 'tableSendToCol',
  sendAt = 'tableSendAtCol',

  // Top up
  agentRemarks = 'tableAgentRemarksCol',
  playerData = 'tablePlayerDataCol',
  requestAt = 'tableRequestAtCol',

  // Transfer coin
  playerPhoneNumber = 'tablePlayerPhoneNumberCol',
  transferAt = 'tableTransferAtCol',

  // Withdraw request
  requestedAt = 'tableRequestedAtCol',
  playerEmail = 'tablePlayerEmailCol',

  //
  roleIdentifier = 'roleIdentifier',
  isDefault = 'isDefault',

  gameType = 'tableGameTypeCol',
}

checkForDuplicateEnumValues(
  TableIdsEnum,
  'Duplicate values found in "TableIdsEnum".'
);
