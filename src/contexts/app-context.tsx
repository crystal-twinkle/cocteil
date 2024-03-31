import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';

interface ISmile {
  name: string;
  pic: string[];
}

export interface IAppContext {
  smiles: ISmile[];
  setSmiles: React.Dispatch<React.SetStateAction<ISmile[]>>;
}

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [smiles, setSmiles] = useState<ISmile[]>([]);

  const value = useMemo(
    () => ({
      smiles,
      setSmiles,
    }),
    [smiles]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
