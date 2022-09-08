import PropTypes from "prop-types";
import HueSample from "./HueSample.js";
import React from "react";

export default class CivTable extends React.Component{
    render = () => {
    let rows = [
        {attribute: "Name", value: "name"},
        {attribute: "Symbol", value: "symbol"},
        {attribute: "Ethnicity", value: "ethnicity"},
        {attribute: "Religion", value: "religion"},
        {attribute: "Hue", value: "hue"},
        {attribute: "Sub-continent", value: "subcontinent"},
        {attribute: "Social class", value: "social class"},
        {attribute: "Morality", value: "morality"},
        {attribute: "8values", value: "values"},
        {attribute: "Parents", value: "parents"},
        {attribute: "Institutions", value: "institutions"}
    ];
    let Row = ({civ, row}) => {
        let Value;
        switch (row.value){
            case "name":
                Value = () => (<span>{civ.name.en}</span>)
            break;
            case "symbol":
                Value = () => (<img src={civ.symbol}/>)
            break;
            case "hue":
                Value = () => (<><HueSample color={"hsl("+civ.hue+",100%,40%)"}/> <HueSample color={"hsl("+civ.hue+",75%,50%)"}/> <span>{civ.hue}</span></>)
            break;
            default:
                if(Array.isArray(civ[row.value])){
                    Value = () => (
                        <>
                            {
                                civ[row.value].map(
                                    (element) => <p>{element}</p>
                                )
                            }
                        </>
                    )
                }else{
                    Value = () => (<span>{civ[row.value]}</span>)
                }
            break;
        }
        return (
            <tr>
                <td class="attribute">{row.attribute}</td>
                <td class="value"><Value/></td>
            </tr>
        )
    }
    return (
        <table>
            {
                rows.map(
                    (r) => <Row civ={this.props.civ} row={r}/>
                )
            }
        </table>
    );
    }
}

CivTable.propTypes = {
    civ: PropTypes.shape({
        name: PropTypes.shape(
            {
                en: PropTypes.string
            }
        ),
        symbol: PropTypes.string,
        ethnicity: PropTypes.string,
        religion: PropTypes.string,
        hue: PropTypes.number,
        subcontinent: PropTypes.string,
        class: PropTypes.string,
        morality: PropTypes.arrayOf(PropTypes.string),
        values: PropTypes.arrayOf(PropTypes.string),
        parents: PropTypes.arrayOf(PropTypes.string),
        institutions: PropTypes.arrayOf(PropTypes.string)
    })
};