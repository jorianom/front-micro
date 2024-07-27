import { Container, Row, Col, DropdownDivider } from "react-bootstrap";
import { Lists } from "./Lists";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories, getProducts } from "../store/slices/thunks";
import { NavbarHome } from "./Navbar";

export const Home = () => {
	const dispatch = useDispatch();
	const { products = [] } = useSelector((state) => state.products);
	const { categories = [] } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getProducts(products));
		dispatch(getCategories(categories));
	}, []);

	return (
		<>
			<NavbarHome />
			<div className="abs-center ">
				<Container fluid>
					<Row className="justify-content-md-center">
						<Col className="">
							<Lists name="Productos" data={products} />
						</Col>
						<Col className="">
							<Lists name="Categorias" data={categories} />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};
