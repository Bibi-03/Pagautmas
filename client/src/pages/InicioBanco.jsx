import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { getCurrentMoneyRequest } from "../api/CuentaBancaria.api";
import { currencyFormatter } from "../assets/formatMoney";

function InicioBanco() {
  const { currentUser } = useAuthContext();
  const [data, setData] = useState({
    dineroActual: 0,
    numCuentaUsuario: 0,
    email: currentUser.response.email,
  });
  useEffect(() => {
    const GetTotalMoney = async () => {
      try {
        const response = await getCurrentMoneyRequest(
          currentUser.response.email
        );
        setData(response.data);
      } catch (error) {}
    };

    GetTotalMoney();
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <div className="overflow-x-auto">
        <table class="min-w-full md:min-w-[900px] divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cuenta Bancaria
              </th>
              <th class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Saldo
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                {data.numCuentaUsuario}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{data.email}</td>
              <td class="px-6 py-4 whitespace-nowrap">{currencyFormatter(data.dineroActual)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InicioBanco;
