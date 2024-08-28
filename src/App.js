import { useState } from "react";
import { Container, Content, ButtonGrid } from "./styles";
import { Display } from "./components/Display";
import { Button } from "./components/Button";

export default function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("");

    const handleAddNumber = (number) => {
        setCurrentNumber((prev) =>
            prev === "0" ? `${number}` : `${prev}${number}`
        );
    };

    const handleClear = () => {
        setCurrentNumber("0");
        setFirstNumber("0");
        setOperation("");
    };

    const handleSumOperation = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("+");
        } else {
            const result = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(result));
            setOperation("");
        }
    };

    const handleMinusOperation = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("-");
        } else {
            const result = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(result));
            setOperation("");
        }
    };

    const handleMultiplyOperation = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("x");
        } else {
            const result = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(result));
            setOperation("");
        }
    };

    const handleDivisionOperation = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("/");
        } else {
            const result = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(result));
            setOperation("");
        }
    };

    const handleEquals = () => {
        if (firstNumber !== "0" && operation && currentNumber !== "0") {
            switch (operation) {
                case "+":
                    handleSumOperation();
                    break;
                case "-":
                    handleMinusOperation();
                    break;
                case "x":
                    handleMultiplyOperation();
                    break;
                case "/":
                    handleDivisionOperation();
                    break;
                default:
                    break;
            }
        }
    };

    const handleBackspaceDisplay = () => {
        if (currentNumber.length === 1) {
            return setCurrentNumber("0");
        }

        setCurrentNumber((prev) => prev.slice(0, -1));
    };

    return (
        <Container>
            <Content>
                <Display value={currentNumber} />
                <ButtonGrid>
                    <Button label={"*"} onClick={handleMultiplyOperation} />
                    <Button label={"/"} onClick={handleDivisionOperation} />
                    <Button label={"<"} onClick={handleBackspaceDisplay} />
                </ButtonGrid>
                <ButtonGrid>
                    <Button label={"+"} onClick={handleSumOperation} />
                    <Button label={"-"} onClick={handleMinusOperation} />
                    <Button label={"C"} onClick={handleClear} />
                </ButtonGrid>
                <ButtonGrid>
                    <Button label={"7"} onClick={() => handleAddNumber("7")} />
                    <Button label={"8"} onClick={() => handleAddNumber("8")} />
                    <Button label={"9"} onClick={() => handleAddNumber("9")} />
                </ButtonGrid>
                <ButtonGrid>
                    <Button label={"4"} onClick={() => handleAddNumber("4")} />
                    <Button label={"5"} onClick={() => handleAddNumber("5")} />
                    <Button label={"6"} onClick={() => handleAddNumber("6")} />
                </ButtonGrid>
                <ButtonGrid>
                    <Button label={"1"} onClick={() => handleAddNumber("1")} />
                    <Button label={"2"} onClick={() => handleAddNumber("2")} />
                    <Button label={"3"} onClick={() => handleAddNumber("3")} />
                </ButtonGrid>

                <ButtonGrid>
                    <Button label={"0"} onClick={() => handleAddNumber("0")} />
                    <Button label={"="} onClick={handleEquals} />
                </ButtonGrid>
            </Content>
        </Container>
    );
}
