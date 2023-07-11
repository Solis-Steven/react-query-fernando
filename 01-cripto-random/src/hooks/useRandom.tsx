import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromApi = async():Promise<number> => {
    const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
    const numberString = await res.text();
  
    return(+numberString);
}

export const useRandom = () => {
    const query = useQuery(
        ["randonNumber"], // Indica como queremos que maneje nuestro cache
        getRandomNumberFromApi // Aqui siempre se debe poner una funcion que devuelva algo
    );

      
    return(query);
}