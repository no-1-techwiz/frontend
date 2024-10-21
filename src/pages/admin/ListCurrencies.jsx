import { Button } from "@components/ui/button"

export const ListCurrencies = () => {

  return (
    <>
      <div className="Container">

      </div>
      <div className="container mx-auto my-12">
        <div>
          <h1 >Manage Currencies </h1>
          <Button type="button" className="my-2">Add New</Button>
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Currency Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Symbol
                </th>
                <th scope="col" class="px-6 py-3">
                  Code
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Vietnamese Dong
                </th>
                <td class="px-6 py-4">
                  VND
                </td>
                <td class="px-6 py-4">
                  ₫
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  India Rupee
                </th>
                <td class="px-6 py-4">
                  INR
                </td>
                <td class="px-6 py-4">
                  ₹
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  United States Dollar
                </th>
                <td class="px-6 py-4">
                  USD
                </td>
                <td class="px-6 py-4">
                  $
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  United Kingdom Pound
                </th>
                <td class="px-6 py-4">
                  GBP
                </td>
                <td class="px-6 py-4">
                  £
                </td>
              </tr>
       
            </tbody>
          </table>
        </div>



      </div>

    </>
  )
}