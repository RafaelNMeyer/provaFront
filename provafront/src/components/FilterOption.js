import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

const CheckboxCustom = withStyles({
    root: {
      color: cyan[300],
      '&$checked': {
        color: cyan[300],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

// object destructuring
export default function FilterOption({name, checkedInit, setCheckedInit}){
    function handleChange(){
        if(checkedInit.includes(name)){
          setCheckedInit(checkedInit.filter(item => item !== name))
        }else{
          setCheckedInit([...checkedInit, name])
        }
      };
    
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                value="end"
                control={<CheckboxCustom checked={checkedInit.includes(name)} onChange={handleChange}/>}
                style={{ height: 25, width: 20 }}
                label={name}
                labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    )
}