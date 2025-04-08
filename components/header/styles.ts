import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row", // Use a valid value for flexDirection
        padding: 20,
        
        borderBottomWidth: 0.5,
        gap: 10,
        alignItems: "center",
        borderBottomColor: colors.gray[600],

    },
    image: {
      width: 42,
      height: 42,
      borderRadius: 15,
    },

    user: {

       flex: 1
       
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.gray[100],
    },
    email: {
        fontSize: 14,
        color: colors.gray[400],
    },
  });