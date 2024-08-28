import { DisplayContainer } from "./styles";

export const Display = ({ value }) => {
    return (
        <DisplayContainer>
            <input value={value} />
        </DisplayContainer>
    );
};
