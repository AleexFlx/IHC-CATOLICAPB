import threading
import time

def valor_calibracao(linha):
    primeiro_caractere = None
    ultimo_caractere = None
    
    for c in linha:
        if c.isdigit():
            if primeiro_caractere is None:
                primeiro_caractere = c
            ultimo_caractere = c

    if primeiro_caractere is not None:
        return int(primeiro_caractere + ultimo_caractere)
    else:
        return 0

def processar_linhas(linhas, resultados, index):
    soma_local = 0
    for linha in linhas:
        soma_local += valor_calibracao(linha)
    resultados[index] = soma_local

def main():
    tempo_inicial = time.time()

    with open('new_calibration_text.txt', 'r') as file:
        calibrations = file.readlines()

    num_threads = 8
    thread_list = []
    resultados = [0] * num_threads
    linhas_por_thread = len(calibrations) // num_threads

    for i in range(num_threads):
        start_index = i * linhas_por_thread
        end_index = (i + 1) * linhas_por_thread if i != num_threads - 1 else len(calibrations)
        thread = threading.Thread(target=processar_linhas, args=(calibrations[start_index:end_index], resultados, i))
        thread_list.append(thread)
        thread.start()

    for thread in thread_list:
        thread.join()

    soma_total = sum(resultados)
    count = len(calibrations)

    print(f"A soma dos valores é: {soma_total}")
    print(f"Total de linhas: {count}")

    tempo_final = time.time()
    print(f"Tempo de execução: {(tempo_final - tempo_inicial) * 1000:.3f} ms")

if __name__ == "__main__":
    main()