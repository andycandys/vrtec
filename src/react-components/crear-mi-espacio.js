import React, { Component } from "react";
import PropTypes from "prop-types";
import DialogContainer from "./dialog-container.js";
import { WithHoverSound } from "./wrap-with-audio";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ReactSelect from 'react-select';





const HUB_NAME_PATTERN = "^[A-Za-z0-9-'\":!@#$%^&*(),.?~ ]{4,64}$";

export default class CreateRoomDialog extends Component {
  static propTypes = {
    includeScenePrompt: PropTypes.bool,
    onCustomScene: PropTypes.func,
    onClose: PropTypes.func
  };

  state = {
    customRoomName: "",
	selectedOption: null,
    customSceneUrl: ""
  };

 handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

 
 
  render() {
	  
	  
    const { selectedOption } = this.state;
    const { onCustomScene, onClose, ...other } = this.props;
    const onCustomSceneClicked = () => {
      onCustomScene(this.state.customRoomName, this.state.customSceneUrl);
      onClose();
    };
	  
	
       
	
	const options = [{ label: 'Conferencias', value: 1 },
				  { label: 'Área común', value: 2 },
				  { label: 'GALTEC', value: 3 },
				  { label: 'Nuevo espacio', value: 4 }];
	  


    return (
      <DialogContainer title="Selecciona una opción" onClose={onClose} {...other}>
		
	  <Select
        value={selectedOption}
        onChange={this.handleChange}
		className="menu-outer-top"
        options={options}
		placeholder="Elige uno"
      />
		
		
	<div className="custom-scene-form">
		<div className="custom-scene-form__buttons">
		<button className="custom-scene-form__action-button">
                    <span>Crear mi espacio</span>
        </button>
		</div>
	</div>
		
     
      </DialogContainer>
    );
  }
}
