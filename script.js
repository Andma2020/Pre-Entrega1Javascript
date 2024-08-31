function calcularPago() {
    const monto = document.getElementById("monto").value;
    const interes = document.getElementById("interes").value;
    const años = document.getElementById("años").value;

    if (monto && interes && años) {
        const tasaMensual = (interes / 100) / 12;
        const numeroPagos = años * 12;

        const pagoMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));

        document.getElementById("resultado").innerHTML = `El pago mensual es: $${pagoMensual.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, completa todos los campos.";
    }
}