import { InputInputEventDetail, IonInput, IonItem, IonList, IonRadio, IonRadioGroup, IonText } from '@ionic/react';
import { calcularPesoIdeal } from '../../api/calculos';
import { useState } from 'react';

interface NecessidadesNutricionaisProps {
  peso: number;
  altura: number;
  idade: number;
}

const NecessidadesNutricionais: React.FC<NecessidadesNutricionaisProps> = ({
  peso,
  altura,
  idade,
}) => {
    const [necessidadeCaloricaPorKg, setNecessidadeCaloricaPorKg] = useState<number>();
    const [necessidadeProteicaPorKg, setNecessidadeProteicaPorKg] = useState<number>();

    const handleNecessidadeCaloricaPorKg = (e: CustomEvent<InputInputEventDetail>) => {
        setNecessidadeCaloricaPorKg(Number(e.detail.value));
    }
    const handleNecessidadeProteicaPorKg = (e: CustomEvent<InputInputEventDetail>) => {
        setNecessidadeProteicaPorKg(Number(e.detail.value));
    }
  const pesoIdeal = calcularPesoIdeal(altura, idade);
  return (
    <IonList>
      <IonInput
        type="number"
        inputMode="decimal"
        fill="outline"
        label="Necessidade calórica por kg"
        value={necessidadeCaloricaPorKg}
        onIonInput={handleNecessidadeCaloricaPorKg}
      >
        <IonText slot="end">kcal/kg</IonText>
      </IonInput>

      <IonInput
        type="number"
        inputMode="decimal"
        fill="outline"
        label="Necessidade protéica por kg"
        value={necessidadeProteicaPorKg}
        onIonInput={handleNecessidadeProteicaPorKg}
      >
        <IonText slot="end">pt/kg</IonText>
      </IonInput>
      <IonItem>
        <IonText>
          <b>Peso ideal:</b> {pesoIdeal.toFixed(1)} kg
        </IonText>
      </IonItem>
      {/* <IonItem> */}
      {/* <IonList> */}
      <IonItem>
        <IonText>Necessidade calórica por:</IonText>
      </IonItem>
      <IonRadioGroup>
        <IonItem>
          <IonRadio justify="start" labelPlacement="end">
            Peso estimado
          </IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio justify="start" labelPlacement="end">
            Peso ideal
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
      {/* </IonList> */}
      {/* </IonItem> */}
    </IonList>
  );
};

export default NecessidadesNutricionais;
