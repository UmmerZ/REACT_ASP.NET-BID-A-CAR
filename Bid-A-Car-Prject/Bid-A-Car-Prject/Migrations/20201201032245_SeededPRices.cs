using Microsoft.EntityFrameworkCore.Migrations;

namespace Bid_A_Car_Prject.Migrations
{
    public partial class SeededPRices : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -3,
                column: "Price",
                value: 20000);

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -2,
                column: "Price",
                value: 40000);

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -1,
                column: "Price",
                value: 30000);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -3,
                column: "Price",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -2,
                column: "Price",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Vehicle",
                keyColumn: "VehicleID",
                keyValue: -1,
                column: "Price",
                value: 0);
        }
    }
}
