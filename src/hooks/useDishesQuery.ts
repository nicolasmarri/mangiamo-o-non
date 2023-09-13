import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { data as response } from "./data"

interface IDish {
	ID_PIATTO: string
	NOME_PIATTO: string
	DICITURA_PIATTO: string
	STORIA_PIATTO: string
	FOTO_PIATTO: string
	PREZZO_PIATTO: string
	CATEGORIA_PIATTO: {
		ID_CATEGORIA_PIATTO: string
		NOME_CATEGORIA_PIATTO: string
	}[]
	TIPOLOGIA_PIATTO: {
		ID_TIPOCUCINA: string
		NOME_TIPOLOGIA: string
	}[]
	ALLERGENI: []
	TIPO_CUCINA: null
}

const useDishesQuery = () => {
	const { data } = useQuery({
		queryFn: () =>
			axios.get<{ records: IDish[] }>("http://localhost:3000/data"),
	})

	return { data: response as any as { records: IDish[] } }
}

export default useDishesQuery
