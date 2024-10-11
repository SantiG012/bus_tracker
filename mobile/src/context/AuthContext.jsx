import {createContext, useState, useMemo, useCallback, useEffect} from 'react';
import { KEY_STORAGE_AUTH } from '../constants';
import { useMyAsyncStorage } from '../hooks/useMyAsyncStorage';

export const authContextDefault = {
  token: null,
  username: '', 
}

export const AuthContext = createContext({

})