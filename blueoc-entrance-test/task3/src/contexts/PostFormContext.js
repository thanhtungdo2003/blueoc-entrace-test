import { createContext, useContext, useState } from "react";
const FormContext = createContext();
export const FormProvider = ({ children }) => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(20);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [showForm, toggleForm] = useState(false)

    return (
        <FormContext.Provider value={{
            searchKeyword,
            setSearchKeyword,
            page,
            setPage,
            row,
            setRow,
            title, setTitle,
            body, setBody,
            showForm, toggleForm
        }}>
            {children}
        </FormContext.Provider>
    );
};

export const usePostForm = () => useContext(FormContext);
