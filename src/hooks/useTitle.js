import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Shutters`
    }, [title])
};

export default useTitle;