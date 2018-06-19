/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

// ONLY FOR actions like reset state. Should follow reduxs duck patten - https://github.com/erikras/ducks-modular-redux
import CreateAction from '../action-creator/create-action';

export const resetToInitState = new CreateAction(
  'COMMON_ACTION',
  'RESET_TO_INIT_STATE_ACTION'
);
export const resetToInitStateAction = resetToInitState.action;
