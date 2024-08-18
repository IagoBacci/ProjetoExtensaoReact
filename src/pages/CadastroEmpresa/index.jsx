import { useState, useEffect } from "react";
import app from "../../services/Firestore.jsx";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import styles from "./styles.module.css";

export default function CadastroEmpresa() {
  const [cpf, setCpf] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState();
  const [inscricaoEst, setInscricaoEst] = useState("");
  const [nichoMercado, setNichoMercado] = useState("");
  const [inscricaoMun, setInscricaoMun] = useState("");
  const [porte, setPorte] = useState("");
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState();
  const [celular, setCelular] = useState();
  const [empresas, setEmpresas] = useState([]);

  const db = getFirestore(app);

  const empresasCollectionRef = collection(db, "Empresas");

  async function criarDado() {
    try {
      const empresa = await addDoc(collection(db, "Empresas"), {
        nomeFantasia,
        cpf,
        razaoSocial,
        inscricaoEst,
        nichoMercado,
        inscricaoMun,
        porte,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        telefone,
        celular,
        email,
      });
      console.log("Dados salvos com sucesso!", empresa);
      setNomeFantasia("");
      setCpf("");
      setRazaoSocial("");
      setInscricaoEst("");
      setNichoMercado("");
      setInscricaoMun("");
      setPorte("");
      setCep("");
      setLogradouro("");
      setNumero("");
      setComplemento("");
      setBairro("");
      setCidade("");
      setUf("");
      setTelefone("");
      setCelular("");
      setEmail("");
    } catch (e) {
      console.error("Erro ao adicionar documento! ", e);
    }
  }

  useEffect(() => {
    const getEmpresas = async () => {
      const data = await getDocs(empresasCollectionRef);
      setEmpresas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEmpresas();
  }, [empresas]);

  return (
    <>
      <h2 className={styles.cc}>Cadastro de Empresa</h2>
      <div className="card">
        <div className="content">
          <hr />
          <h2 className={styles.heading}>Dados da Empresa</h2>
          <form>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>CPF/CNPJ:</span>
              <input
                className={styles.formcontrol}
                type="number"
                placeholder=""
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(Number(e.target.value))}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Nome
                <br />
                Fantasia:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="nome"
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Razão
                <br />
                Social:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="Razão Social"
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Inscrição
                <br />
                Estadual:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="inscrição_estadual"
                value={inscricaoEst}
                onChange={(e) => setInscricaoEst(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Nicho de
                <br />
                Mercado:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="nicho_mercado"
                value={nichoMercado}
                onChange={(e) => setNichoMercado(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Inscrição
                <br />
                Municipal:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="inscricao_municipal"
                value={inscricaoMun}
                onChange={(e) => setInscricaoMun(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>
                Porte da
                <br />
                Empresa:
              </span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="porte_empresa"
                value={porte}
                onChange={(e) => setPorte(e.target.value)}
              />
            </div>
            <div>
              <hr />
              <h2 className={styles.heading}>Endereço</h2>
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>CEP:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="cep"
                value={cep}
                onChange={(e) => setCep(Number(e.target.value))}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Logradouro:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Número:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="número"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Complemento:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Bairro:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Cidade:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Estado:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="uf"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
            </div>
            <div>
              <hr />
              <h2 className={styles.heading}>Contato</h2>
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Telefone:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(Number(e.target.value))}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>Celular:</span>
              <input
                className={styles.formcontrol}
                placeholder=""
                name="celular"
                value={celular}
                onChange={(e) => setCelular(Number(e.target.value))}
              />
            </div>
            <div className={styles.formgroup}>
              <span className={styles.paragraph}>E-mail:</span>
              <input
                className={styles.formcontrol}
                type="email"
                placeholder=""
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button className={styles.botao} onClick={criarDado}>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
