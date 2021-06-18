import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import FoodCreateImage from "components/molecules/FoodCreateImage";
import FormControlWithChildren from "components/molecules/FormControlWithChildren";
import useCreateBranchOffice from "hooks/useCreateBranchOffice";
import FormControl from "components/molecules/FormControl";
import BranchOfficeSelectType from "components/molecules/BranchOfficeSelectType";

import {
  IoMdPerson,
  IoMdMail,
  IoIosCall,
  IoIosPin,
  IoIosArrowForward,
} from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import { FoodType } from "application/types/FoodType";

type CreateBranchFormType = {
  onClose(): void;
};

const CreateBranchForm = ({ onClose }: CreateBranchFormType) => {
  const { file, onChangeFile, onSubmit, setTypeFood, refs } =
    useCreateBranchOffice(onClose);

  const onClickOption = (optionSelected: FoodType) =>
    setTypeFood(optionSelected);

  return (
    <S.Container onSubmit={onSubmit}>
      <S.GroupFormContainer>
        <Title size="small-medium">Informacion Basica</Title>

        <S.RightFormContainer>
          <FoodCreateImage
            onChange={onChangeFile}
            changeEnabled={!file.isUploading}
            foodImage={file.uploadImage?.localURL}
          />
          <S.FormControlsContainer>
            <FormControl
              ref={refs.nameRef}
              icon={IoMdPerson}
              labelText="Nombre de la sucursal"
            />
            <FormControl
              ref={refs.descriptionRef}
              icon={IoMdPerson}
              labelText="Descripcion"
            />
          </S.FormControlsContainer>
        </S.RightFormContainer>
      </S.GroupFormContainer>
      <S.LeftFormContainer>
        <S.GroupFormContainer>
          <Title size="small-medium">Informacion detallada</Title>
          <S.FormControlsContainer>
            <FormControl
              ref={refs.emailRef}
              icon={IoMdMail}
              labelText="Correo de contacto"
            />
            <S.FormTwoControls>
              <FormControl
                ref={refs.phoneRef}
                icon={IoIosCall}
                labelText="Telefono de Contacto"
              />

              <FormControlWithChildren
                icon={FaHamburger}
                labelText="Tipo de comida"
              >
                <BranchOfficeSelectType onClickOption={onClickOption} />
              </FormControlWithChildren>
            </S.FormTwoControls>
          </S.FormControlsContainer>
        </S.GroupFormContainer>
        <S.GroupFormContainer>
          <S.GeographyContainer>
            <Title size="small-medium">Informacion geográfica</Title>
            <S.GoogleMapsTittle>
              <Description size="small" color="blue">
                Google Maps
              </Description>
              <Icon color="blue" size="small" type={IoIosArrowForward} />
            </S.GoogleMapsTittle>
          </S.GeographyContainer>
          <S.FormControlsContainer>
            <FormControl
              ref={refs.locationNameRef}
              icon={IoMdPerson}
              labelText="Nombre del lugar"
            />
            <S.FormTwoControls>
              <FormControl
                ref={refs.latitudeRef}
                icon={IoIosPin}
                labelText="Latitud"
                type="number"
              />
              <FormControl
                ref={refs.longitudeRef}
                icon={IoIosPin}
                labelText="Longitud"
                type="number"
              />
            </S.FormTwoControls>
          </S.FormControlsContainer>
        </S.GroupFormContainer>
      </S.LeftFormContainer>
      <S.ButtonsContainer>
        <Button
          styles={{ color: "blue", size: "normal" }}
          type="submit"
          text="Crear sucursal"
          isLoading={file.isUploading}
        ></Button>
        <Button
          styles={{ color: "yellow", size: "normal" }}
          type="button"
          text="Cancelar y cerrar"
          onClick={onClose}
        />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default CreateBranchForm;
