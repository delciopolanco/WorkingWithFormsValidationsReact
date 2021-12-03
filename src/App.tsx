import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { setLocale } from "yup";
import "./App.css";
import UserForm from "./form/userForm";
import { Yupi18N } from "./yup-i18n";

function App() {
  const [lang, setLang] = useState("en");
  const { es, en } = Yupi18N;

  setLocale(lang === "en" ? en : es);

  const handleChange = (e: any) => {
    e.preventDefault();
    setLang(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        Using Yup Validations with I18N Traslation
        <div className="App-language">
          <FormControl component="fieldset">
            <FormLabel component="legend" className="App-link">
              Choose your language
            </FormLabel>
            <RadioGroup
              row
              aria-label="language"
              defaultValue={lang}
              name="row-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="en"
                control={<Radio />}
                label="English"
              />
              <FormControlLabel
                value="es"
                control={<Radio />}
                label="Español"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </header>
      <div className="App-content">
        <UserForm user={null} />
      </div>
    </div>
  );
}

export default App;
