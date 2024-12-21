import { useEffect, useState } from "react";
import Button from "../components/Button";
import SelectOptions from "../components/Select";
import { TextArea } from "../components/TextArea";
import ListFillings from "../modules/ListFillings";
import { NewFillingModel, SelectOptionsModel } from "../types/commonTypes";
import { FillingModel } from "../types/fillingTypes";
import api from "../services/api";
import InputNumber from "../components/InputNumber";
import Checkbox from "../components/Checkbox";
import InputDate from "../components/InputDate";
import { formatFieldValue } from "../utils/functions";
import { newFillingSchema } from "../validations/newFillingSchema";

export default function FillingPage() {
  const [listData, setListData] = useState<FillingModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fields, setFields] = useState<SelectOptionsModel[]>([]);
  const [formData, setFormData] = useState<NewFillingModel>({
    fieldId: "",
    fieldType: "string",
    value: "",
    isRequired: false
  });

  //#region Handle API Functions
  const handleGetData = async () => {
    try {
      const response = (await api.get(`/preenchimentos`))?.data;
      if (response && response?.length > 0) {
        const updatedData = response.map((item: FillingModel) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleString(),
          convertedField: fields.find(f => f.value == item.fieldId)?.label ?? ""
        }));
        setListData(updatedData);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching fillings:", error);
    }
  };

  const loadFields = async () => {
    try {
      const response = (await api.get(`/campos`))?.data;
      if (response && response.length > 0) {
        const formattedFields = response.map((field: { id: string; name: string; datatype: string }) => ({
          value: field.id,
          label: field.name,
          datatype: field.datatype,
        }));
        setFields(formattedFields);
        setFormData((prevState) => ({
          ...prevState,
          fieldId: formattedFields[0]?.value ?? ""
        }))
      }
    } catch (error) {
      console.error("Error fetching fields:", error);
    }
  };

  const handleSubmit = async () => {
    const result = newFillingSchema.safeParse(formData);
    if (!result.success) {
      alert("Erros no formulário:");
      result.error.errors.forEach((error) => {
        console.error(error.message);
        alert(error.message);
      });
      return;
    }

    try {
      const { fieldId, value, isRequired } = formData;
      const data = {
        fieldId,
        value,
        isRequired
      };
      const response = await api.post("/preenchimentos", data);
      if (response.status === 201) {
        alert("Preenchimento adicionado com sucesso!");
        setFormData({ fieldId: fields[0]?.value ?? "", fieldType: "string", value: "", isRequired: false });
        handleGetData();
      }
    } catch (error) {
      console.error("Erro ao adicionar preenchimento:", error);
      alert("Erro ao adicionar preenchimento");
    }
  };
  //#endregion

  //#region Handle Functions
  const handleFieldChange = (fieldId: string) => {
    const selectedField = fields.find((field) => field.value === fieldId);
    if (selectedField) {
      setFormData((prevData) => ({
        ...prevData,
        fieldId: fieldId,
        fieldType: selectedField.datatype as string,
        value: "",
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { id, value, type, checked } = e.target;
    if (id == "isRequired" as keyof NewFillingModel) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
      }));
      return;
    }
    setFormData((prevData) => {
      let formattedValue: any = value;
      if (prevData.fieldType === "boolean") {
        formattedValue = value === "true";
      } else if (prevData.fieldType === "date") {
        formattedValue = new Date(value);
      } else if (prevData.fieldType === "number") {
        formattedValue = parseFloat(value) || 0;
      }
      return {
        ...prevData,
        value: formattedValue,
      };
    });
  };
  //#endregion

  useEffect(() => {
    loadFields();
    handleGetData();
  }, []);

  useEffect(() => {
    if (fields.length > 0) {
      const updatedData = listData.map((item: FillingModel) => {
        const field = fields.find(f => f.value == item.fieldId);
        return {
          ...item,
          convertedField: field?.label ?? "",
          value: field?.datatype ? formatFieldValue(field?.datatype, item.value) : ""
        }
      }

      );
      setListData(updatedData);
    }
  }, [fields]);

  return (
    <div className="flex flex-col">
      <main className="flex-grow mt-12">
        <h1 className="flex justify-center text-3xl font-bold text-white">Desafio Brasão</h1>
        <div className="flex justify-center mt-6 mb-16">
          <div className="bg-gray-900 p-4 sm:p-10 border border-gray-700 rounded-md shadow-lg w-full max-w-4xl">
            <SelectOptions
              label="Selecione um campo"
              listOptions={fields}
              handleChange={(e) => handleFieldChange(e.target.value)}
              controlId="fieldId"
              value={formData.fieldId}
            />
            <div className="mt-6">
              {formData.fieldType === "string" && (
                <TextArea
                  handleChange={handleInputChange}
                  value={formData.value as string}
                  placeholder="Digite o valor"
                />
              )}
              {formData.fieldType === "number" && (
                <div className="mt-5 mb-6">
                  <InputNumber
                    onChange={handleInputChange}
                    placeholder="Digite o número"
                    value={formData.value as number}
                  />
                </div>
              )}
              {formData.fieldType === "boolean" && (
                <div className="mt-4 flex items-center -mb-2">
                  <Checkbox
                    controlId={formData.fieldId}
                    description="Verdadeiro / Falso"
                    handleChange={() =>
                      setFormData((prevData) => ({
                        ...prevData,
                        value: !(prevData.value as boolean),
                      }))
                    }
                    value={formData.value as boolean}
                  />
                </div>
              )}
              {formData.fieldType === "date" && (
                <div className="mb-6">
                  <InputDate
                    value={(formData.value as Date)}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
            <div className={"mt-5 flex justify-center sm:justify-start"}>
              <Checkbox
                description="É obrigatório?"
                handleChange={handleInputChange}
                controlId="isRequired"
                value={formData.isRequired}
              />
            </div>
            <div className="mt-2">
              <Button
                title="Adicionar"
                styles={{ width: "100%" }}
                onClick={handleSubmit}
                disabled={
                  !formData.fieldId ||
                  (formData.fieldType == "boolean" && formData.value == null) ||
                  formData.value === ""
                }
              />
            </div>
            <hr className="border-1 border-gray-700 my-6" />
            <ListFillings
              listData={listData}
              loading={loading}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
