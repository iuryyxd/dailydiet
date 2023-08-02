import { Text, View, StyleSheet, Modal } from "react-native";
import { Button } from "./Button";
import { StatusBar } from "expo-status-bar";

interface DeleteModalProps {
  modalVisible: boolean;
  handleDeleteMeal: () => void;
  toggleModalVisibility: () => void;
}

export function DeleteModal({
  toggleModalVisibility,
  handleDeleteMeal,
  modalVisible,
}: DeleteModalProps) {
  const handleCancel = () => {
    toggleModalVisibility();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        toggleModalVisibility();
      }}
    >
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.25)" animated />
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Deseja realmente excluir o registro da refeição?
            </Text>
            <View style={styles.buttonsContainer}>
              <Button title="Cancelar" type="Outlined" onPress={handleCancel} />
              <Button
                title="Sim, excluir"
                type="Filled"
                onPress={handleDeleteMeal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    right: 0,
    top: 0,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "85%",
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    gap: 32,
  },
  modalText: {
    width: "80%",
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    color: "#333638",

    textAlign: "center",
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
  },
});
