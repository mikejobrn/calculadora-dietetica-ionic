import { InputInputEventDetail, IonButton, IonInput, IonList, IonRow, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { calcularClassificacaoImc, calcularImc } from '../../api/calculos';
import Imc from '../imc/Imc';
import './DadosPaciente.css';
import NecessidadesNutricionais from '../necessidades-nutricionais/NecessidadesNutricionais';

const DadosPaciente: React.FC = () => {
  const [peso, setPeso] = useState<number>();
  const [altura, setAltura] = useState<number>();
  const [idade, setIdade] = useState<number>();

  const [imc, setImc] = useState<number>();
  const [classificacaoImc, setClassificacaoImc] = useState<string>();

  const handlePeso = (e: CustomEvent<InputInputEventDetail>) => {
    setPeso(Number(e.detail.value));
  };
  const handleAltura = (e: CustomEvent<InputInputEventDetail>) => {
    setAltura(Number(e.detail.value));
  };
  const handleIdade = (e: CustomEvent<InputInputEventDetail>) => {
    setIdade(Number(e.detail.value));
  };

  const handleCalcularImc = () => {
    if (peso && altura && idade) {
      let imc = calcularImc(peso, altura);
      setImc(imc);
      setClassificacaoImc(calcularClassificacaoImc(imc, idade));
    }
  };

  return (
    <IonList lines="none">
      <IonInput
        type="number"
        inputMode="decimal"
        fill="outline"
        label="Peso"
        value={peso}
        onIonInput={handlePeso}
      >
        <IonText slot="end">kg</IonText>
      </IonInput>

      <IonInput
        type="number"
        inputMode="decimal"
        fill="outline"
        label="Altura"
        value={altura}
        onIonInput={handleAltura}
      >
        <IonText slot="end">m</IonText>
      </IonInput>

      <IonInput
        type="number"
        inputMode="decimal"
        fill="outline"
        label="Idade"
        value={idade}
        onIonInput={handleIdade}
      >
        <IonText slot="end">anos</IonText>
      </IonInput>

      <IonRow className="ion-justify-content-end">
        <IonButton fill="outline">Estimar peso e altura</IonButton>
        <IonButton onClick={handleCalcularImc}>Calcular</IonButton>
      </IonRow>

      {imc && classificacaoImc && <Imc imc={imc} classificacao={classificacaoImc} />}

      {imc && <NecessidadesNutricionais peso={peso!} altura={altura!} idade={idade!} />}
    </IonList>
  );
};

export default DadosPaciente;
