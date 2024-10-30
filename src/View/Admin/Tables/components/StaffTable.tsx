
import Card from "../../../../components/card"
import { useTranslation } from "react-i18next";


function StaffTable(){
    const {t} = useTranslation();

    return(
        <div
        className="mt-5 h-full grid-cols-1 gap-5 md:grid-cols-2"
        >
            <Card extra={"w-full pb-10 p-4 h-full"}>
                <div
                    className="mt-1 overflow-x-scroll xl:overflow-x-hidden"
                >
                    <table
                    className="w-full">
                        <thead>
                            <tr
                            className="!border-px !border-gray-400">
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    #
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("payroll_number")}</p>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("name")}</p>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("sex")}</p>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("dob")}</p>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("current_status")}</p>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                                >
                                    <p className="text-sm font-bold text-gray-600 dark:text-white">{t("current_workplace")}</p>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </Card>
        </div>
    )
}

export default StaffTable;