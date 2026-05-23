import styled from "styled-components";

const transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

export const NotesContainer = styled.div<{ $isDark: boolean }>`
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px;
  color: ${(props) => (props.$isDark ? "#fbcfe8" : "#0f172a")};
  font-family: 'Poppins', sans-serif;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h2 {
    font-family: 'Georgia', serif;
    font-size: 24px;
    font-weight: 700;
  }

  .back-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
    opacity: 0.7;
    &:hover { opacity: 1; }
  }
`;

export const InputArea = styled.form<{ $isDark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 24px;
  background-color: ${(props) => (props.$isDark ? "rgba(251, 207, 232, 0.02)" : "rgba(15, 23, 42, 0.01)")};
  border: 1px solid ${(props) => (props.$isDark ? "rgba(251, 207, 232, 0.08)" : "rgba(15, 23, 42, 0.06)")};
  backdrop-filter: blur(12px);
  max-width: 650px;
  margin: 0 auto 50px auto;

  .add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px;
    border-radius: 12px;
    border: none;
    background-color: ${(props) => (props.$isDark ? "#fbcfe8" : "#0f172a")};
    color: ${(props) => (props.$isDark ? "#09050b" : "#ffffff")};
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: ${transition};
    &:hover { transform: scale(1.01); opacity: 0.9; }
  }
`;

export const StyledInput = styled.input<{ $isDark: boolean }>`
  padding: 14px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid ${(props) => (props.$isDark ? "rgba(251, 207, 232, 0.15)" : "rgba(15, 23, 42, 0.1)")};
  color: inherit;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  &:focus { border-color: #f472b6; }
`;

export const StyledTextArea = styled.textarea<{ $isDark: boolean }>`
  padding: 14px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid ${(props) => (props.$isDark ? "rgba(251, 207, 232, 0.15)" : "rgba(15, 23, 42, 0.1)")};
  color: inherit;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  outline: none;
  &:focus { border-color: #f472b6; }
`;

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export const NoteCard = styled.div<{ $isDark: boolean }>`
  padding: 28px;
  border-radius: 20px;
  background-color: ${(props) => (props.$isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)")};
  border: 1px solid ${(props) => (props.$isDark ? "rgba(251, 207, 232, 0.05)" : "rgba(15, 23, 42, 0.04)")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  transition: ${transition};

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 13px;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0 0 20px 0;
    word-break: break-word;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    opacity: 0.5;
  }

  &:hover {
    border-color: #f472b6;
    transform: translateY(-2px);
  }
`;

export const ActionBtn = styled.button<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: rgba(120,120,120,0.08);
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transition};
  &:hover { background: ${(props) => props.color}; color: white; }
`;