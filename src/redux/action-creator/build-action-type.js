/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

export const appName = 'muziPropertyFinder';

export default function buildActionType(reducerName = '', actionName = '') {
  reducerName = reducerName.toString().trim();
  if (!reducerName) {
    throw new Error('Reducer name cannot be blank');
  }
  actionName = actionName.toString().trim();
  if (!actionName) {
    throw new Error('Action name cannot be blank');
  }
  return `${appName}/${reducerName}/${actionName}`;
}
