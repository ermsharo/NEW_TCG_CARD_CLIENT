
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AxiosError } from 'axios';
import { GetData } from "../services/request";

//Quantidade por pagina
//Pagina
//Requisição data, loading error é refresh
//Lingua
//Navegador
//Filtros
//EasyApply
//Actual_ID


interface MyContextType {
  perPage: number;
  page: number;
  actualId: string;
  // trunk-ignore(trunk/ignore-disabled-linter)
  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  data: any | null;
  error: AxiosError | null;
  isLoading: boolean;
  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  refetchData: Promise<void>;
  navigation: string;

  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setActualId: React.Dispatch<React.SetStateAction<string>>;
  setNavigation: React.Dispatch<React.SetStateAction<string>>;

}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode; // Use ReactNode for children
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [perPage, setPerPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [actualId, setActualId] = useState<string>("");
  const [navigation, setNavigation] = useState<string>("JOBS_PT"); //Jobs pt, Jobs en, List pt, list en, saved



  //Requisição dos posts aqui


  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  const { data, error, isLoading, refetchData } = GetData<any>({
    url: `http://localhost:5000/jobs_by_language?page=${page}&per_page=${perPage}&language=${language}`,
  });


  return (
    <MyContext.Provider value={{
      perPage,
      setPerPage,
      page,
      setPage,
      actualId,
      setActualId,
      navigation,
      setNavigation,
      data, error, isLoading, refetchData

    }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
