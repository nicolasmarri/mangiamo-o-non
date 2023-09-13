import { Card, Image } from "antd"
import { useDishesQuery } from "../../hooks"
import styled from "styled-components"

const ContainerDishes = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 1rem;
`

const { Meta } = Card

const Home = () => {
	const { data } = useDishesQuery()

	const dishes = data.records.filter(x => x.FOTO_PIATTO)

	return (
		<ContainerDishes>
			{dishes?.map((dish, i) => (
				<Card
					key={`${i}-${dish.NOME_PIATTO}`}
					style={{ width: 240 }}
					cover={<Image alt="example" src={dish?.FOTO_PIATTO} />}
				>
					<Meta
						title={dish?.NOME_PIATTO}
						description={dish?.DICITURA_PIATTO}
					/>
				</Card>
			))}
		</ContainerDishes>
	)
}

export default Home
