#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["PassionateHarpist.API/PassionateHarpist.API.csproj", "PassionateHarpist.API/"]
RUN dotnet restore "PassionateHarpist.API/PassionateHarpist.API.csproj"
COPY . .
WORKDIR "/src/PassionateHarpist.API"
RUN dotnet build "PassionateHarpist.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PassionateHarpist.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet PassionateHarpist.API.dll