import { Input } from "../components/Input";
import { validateInsert } from "../utils/functions";
import { datatypeMap } from "../utils/constants";
import SelectOptions from "../components/Select";
import { NewFieldModel, SelectOptionsModel } from "../types/commonTypes";
import { SELECTOPTIONS } from "../utils/constants";
import ListFields from "../modules/ListFields";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { useEffect, useState } from "react";
import { FieldModel } from "../types/fieldTypes";
import api from "../services/api";

export default function MainPage() {
  const [listData, setListData] = useState<FieldModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<NewFieldModel>({
    name: '',
    datatype: 'string',
    isRequired: false,
  });
  const listSelectOptions: SelectOptionsModel[] = SELECTOPTIONS.options();

  const handleGetData = async () => {
    try {
      const response = (await api.get(`/campos`))?.data;
      if (response && response?.length > 0) {
        const updatedData = response.map((item: FieldModel) => ({
          ...item,
          datatype: datatypeMap[item.datatype as string] || item.datatype,
          createdAt: new Date(item.createdAt).toLocaleString(),
        }));
        setListData(updatedData);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/campos', formData);
      if (response.status === 201) {
        alert('Campo criado com sucesso!');
        setFormData({
          name: '',
          datatype: 'string',
          isRequired: false,
        });
        handleGetData();
      }
    } catch (error) {
      console.error('Erro ao criar campo:', error);
      alert('Erro ao criar campo');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <main className="flex-grow mt-12">
          <h1 className="flex justify-center text-3xl font-bold text-white">Desafio Brasão</h1>
          <div className="flex justify-center mt-6 mb-16">
            <div className="bg-gray-900 p-4 sm:p-10 border border-gray-700 rounded-md shadow-lg w-full max-w-4xl">
              <div className={"flex flex-col sm:flex-row items-center w-full"}>
                <div className={"w-full sm:w-2/4 mr-0 sm:mr-4 mb-4 sm:mb-0"}>
                  <Input
                    handleChange={handleInputChange}
                    value={formData.name}
                    type="text"
                    placeholder="Qual o nome do campo?"
                    label="Nome"
                    controlId={"name"}
                  />
                </div>
                <div className={"w-full sm:w-2/4 mr-0 sm:mr-4 mb-4 sm:mb-0"}>
                  <SelectOptions
                    label="Selecione um tipo"
                    listOptions={listSelectOptions}
                    handleChange={handleInputChange}
                    controlId={"datatype"}
                    value={formData.datatype}
                  />
                </div>
                <div className={"mt-5 flex justify-center sm:justify-start"}>
                  <Checkbox
                    description="É obrigatório?"
                    handleChange={handleInputChange}
                    controlId="isRequired"
                    value={formData.isRequired}
                  />
                </div>
              </div>
              <Button
                title="Adicionar"
                styles={{ width: '100%', marginBottom: '1.4rem' }}
                onClick={handleSubmit}
                disabled={validateInsert(formData.name)}
              />
              <hr className="border-1 border-gray-700" />
              <br />
              <ListFields
                listData={listData}
                loading={loading}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};