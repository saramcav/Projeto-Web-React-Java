interface Props<T> {
  itens: T[];
  renderizarItem: (item: T) => JSX.Element;
  classNameLG?: string;
}

const ListGroup = <T,>({ itens, renderizarItem, classNameLG }: Props<T>) => (
  <ul className={`list-group ${classNameLG}`}>
    {itens.map((item, indice) => {
      return (
        <li className="list-group-item" key={`${JSON.stringify(item)}-${indice}`}>
          {renderizarItem(item)}
        </li>
      );
    })}
  </ul>
);


export default ListGroup;
