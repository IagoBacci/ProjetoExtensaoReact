import { useState, useEffect } from "react";
import app from "../../services/Firestore.jsx";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.css";

export default function CadastroCliente() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [rg, setRG] = useState();
  const [orgao, setOrgao] = useState("");
  const [estadoExp, setEstadoExp] = useState("");
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState();
  const [celular, setCelular] = useState();
  const [clientes, setClientes] = useState([]);

  const db = getFirestore(app);

  const clientesCollectionRef = collection(db, "Clientes");

  async function criarDado() {
    try {
      const cliente = await addDoc(collection(db, "Clientes"), {
        nome,
        cpf,
        rg,
        orgao,
        estadoExp,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        telefone,
        celular,
        email,
      });
      console.log("Dados salvos com sucesso!", cliente);
      setNome("");
      setCpf("");
      setRG("");
      setOrgao("");
      setEstadoExp("");
      setCep("");
      setLogradouro("");
      setNumero("");
      setComplemento("");
      setBairro("");
      setCidade("");
      setEstado("");
      setTelefone("");
      setCelular("");
      setEmail("");
    } catch (e) {
      console.error("Erro ao adicionar documento! ", e);
    }
  }

  useEffect(() => {
    const getClientes = async () => {
      const data = await getDocs(clientesCollectionRef);
      setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getClientes();
  }, [clientes]);

  return (
    <>
      <h2 className={styles.cc}>Cadastro de Cliente</h2>
      <div className="card">
        <div className="content">
          <hr />
          <h2 className={styles.heading}>Dados do Cliente</h2>
          <Form>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>
                Nome completo:
              </Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>CPF:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>RG:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="rg"
                value={rg}
                onChange={(e) => setRG(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Orgão:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="orgao"
                value={orgao}
                onChange={(e) => setOrgao(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>
                Estado Expeditor:
              </Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="estado_expeditor"
                value={estadoExp}
                onChange={(e) => setEstadoExp(e.target.value)}
              />
            </Form.Group>
            <hr />
            <h2 className={styles.heading}>Endereço</h2>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>CEP:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="cep"
                value={cep}
                onChange={(e) => setCep(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Logradouro:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Número:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="número"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Complemento:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Bairro:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Cidade:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Estado:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="text"
                placeholder=""
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </Form.Group>
            <hr />
            <h2 className={styles.heading}>Contato</h2>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Telefone:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>Celular:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="celular"
                value={celular}
                onChange={(e) => setCelular(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className={styles.formgroup}>
              <Form.Label className={styles.paragraph}>E-mail:</Form.Label>
              <Form.Control
                className={styles.formcontrol}
                type="email"
                placeholder=""
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                className={styles.botao}
                variant="primary"
                onClick={criarDado}
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
