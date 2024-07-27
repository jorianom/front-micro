import {
	Table,
	Button
} from "react-bootstrap";
import { FormSubmit } from "./FormSubmit";
import { deleteCategory, deleteProduct } from "../store/slices/thunks";
import { useDispatch } from "react-redux";

export const Lists = ({ data, name }) => {
	const dispatch = useDispatch();
	const onClickDelete = (id) => {
		if (name == "Productos") {
			dispatch(deleteProduct(id));
		} else {
			dispatch(deleteCategory(id));
		}
	};
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Tabla {name}</h1>
				<FormSubmit name={name} type="post" />
			</div>
			{data ? (
				<Table striped bordered hover>
					<thead>
						<tr className="text-center">
							<th>#</th>
							<th className="">Nombre</th>
							<th className="">Fecha de creación</th>
							<th colSpan={2} className="">
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((field, id) => {
							let timeField = name == "Productos" ? field.createTime : field.createTime.$date
							let idField = name == "Productos" ? field.id : field._id.$oid
							return (
								<tr key={idField}>
									<td>{id + 1}</td>
									<td>{field.name}</td>
									<td>{timeField}</td>
									<td>
										<FormSubmit name={name} valueEdit={field.name} type="edit" idValue={idField} />
									</td>
									<td>
										<Button
											variant="outline-danger"
											onClick={() => onClickDelete(idField)}
										>
											Eliminar
										</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			) : (
				"No hay productos o categorias"
			)}
		</>
	);
};
